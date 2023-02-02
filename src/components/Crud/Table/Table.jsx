import React, { useEffect } from "react";
import { FaRegEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Table = (props) => {
  useEffect(() => {
    props.getData()
  }, []);

  return (
    <div className="user_table">
      <div className="user_table_top">
        <h2> User Info</h2>
      </div>
      {!props.stData?.length ? <p className="no_data">No Data Available!!</p>
        :
        <div className="table" id="results">
          <div className="theader">
            <div className="table_header">Image</div>
            <div className="table_header">Name</div>
            <div className="table_header">Phone</div>
            <div className="table_header">Action</div>
          </div>
          {props.stData?.map(data =>
            <div key={data.id} className="table_row">
              <div className="table_small">
                <div className="table_cell">Image</div>
                <div className="table_cell"><img className="user_img" src={data.photo} alt="" /></div>
              </div>
              <div className="table_small">
                <div className="table_cell">Name</div>
                <div className="table_cell">{data.name}</div>
              </div>
              <div className="table_small">
                <div className="table_cell">Phone</div>
                <div className="table_cell">{data.phone}</div>
              </div>
              <div className="table_small">
                <div className="table_cell">Action</div>
                <div className="action_icons">
                  <div className="table_cell"><Link to={`/details/${data.id}`}><FaRegEye onClick={() => props.getSingleData(data?.id)} className="view_icon" /></Link></div>
                  <div className="table_cell"><FaEdit onClick={() => props.getSingleData(data?.id)} className="edit_icon" /></div>
                  <div className="table_cell"><FaTrashAlt onClick={() => props.handleDelete(data?.id)} className="delete_icon" /></div>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default Table;
