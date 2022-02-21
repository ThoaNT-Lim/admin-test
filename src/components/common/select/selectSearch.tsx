import { Select, Spin } from 'antd';
import { SelectProps } from 'antd/es/select';
import debounce from 'lodash/debounce';
import React, { useMemo, useRef, useState } from 'react';
import './styles.scss';

export interface DebounceSelectProps<ValueType = any>
  extends Omit<SelectProps<ValueType>, 'options' | 'children'> {
  fetchOptions: (search: string) => Promise<ValueType[]>;
  debounceTimeout?: number;
}

function DebounceSelect<
  ValueType extends { key?: string; label: React.ReactNode; value: string | number } = any,
>({ fetchOptions, debounceTimeout = 800, ...props }: DebounceSelectProps) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState<ValueType[]>([]);
  const fetchRef = useRef(0);

  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then(newOptions => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);

  return (
    <Select<ValueType>
      showSearch
      className="style-select"
      size='large'
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

// Usage of DebounceSelect
interface UserValue {
  label: string;
  value: string;
}
interface SelectSearchProps {
    placeholder?: string;
    showArrow?: boolean
}

async function fetchUserList(username: string): Promise<UserValue[]> {
  console.log('fetching user', username);

  return fetch('https://randomuser.me/api/?results=5') //api mock of antd
    .then(response => response.json())
    .then(body =>
      body.results.map(
        (user: { name: { first: string; last: string }; login: { username: string } }) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }),
      ),
    );
}

const SelectSearch = ({placeholder, showArrow} : SelectSearchProps) => {
  const [value, setValue] = useState<UserValue[]>([]);

  return (
    <DebounceSelect
     className="style-select"
    //   mode="multiple"
      value={value}
      placeholder={placeholder}
      fetchOptions={fetchUserList}
      onChange={newValue => {
        setValue(newValue);
      }}
      style={{ width: '100%' }}
    />
  );
};

export default SelectSearch;