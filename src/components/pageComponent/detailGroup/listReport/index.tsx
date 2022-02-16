import { DownOutlined } from '@ant-design/icons';
import { Tree } from 'antd';
import { DataNode } from 'antd/lib/tree';
import React from 'react';
import './styles.scss';

function ListReport({
    listTool
}: {
    listTool: DataNode[]
}) {

    const onSelect = (selectedKeys: any, info: any) => {
        // console.log('selected', selectedKeys, info);
      };
  return (
    <div className='detail-tree'>
         <Tree
        showLine
        switcherIcon={<DownOutlined />}
        defaultExpandedKeys={['1']}
        onSelect={onSelect}
        treeData={listTool}
      />
    </div>
  )
}

export default ListReport