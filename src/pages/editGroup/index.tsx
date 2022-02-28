import React from 'react'
import FormCreateGroup from '../../components/pageComponent/createGroup';
import { data } from '../detailGroup/mockdataDetail';
import './styles.scss'

function EditGroup() {
    //get detail group

  return (
    <div className="wrapper-create-list-group">
      <div className="group-header">Group 1</div>
      <div className="group-table">
        <FormCreateGroup dataDetail={data}/>
      </div>
    </div>
  )
}

export default EditGroup