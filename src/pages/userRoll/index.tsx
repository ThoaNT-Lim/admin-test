import React from 'react'
import FormUserAddRoll from '../../components/pageComponent/userRoll';
import './styles.scss';

function UserRoll() {
  return (
    <div className="wrapper-create-list-group">
    <div className="group-header">Phân quyền User</div>
    <div className="group-table">
        <FormUserAddRoll />
    </div>
  </div>
  )
}

export default UserRoll