
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
function ListDataset() {
  const [{datasetList},] = useStateValue();
  const history = useHistory();
  return (
    <>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dataset Name</th>
            <th scope="col"> Authors </th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {datasetList.length > 0
            ? datasetList[0].map((v, i) => {
                return (
                  <tr key={i} style={{cursor:'pointer'}}>
                    <th scope="row">{i + 1}</th>
                    <th onClick={() => history.push(`/dataset/detail/${v.id}`)}>
                      {v.dataset_name}
                    </th>
                    <th className='pl-4'>{v.author.length}</th>
                    <th>{v.created_at.split(":")[0].split("T")[0]}</th>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </>
  );
}

export default ListDataset;
