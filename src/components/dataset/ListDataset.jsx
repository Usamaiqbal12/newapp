import Skeleton from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import RSkeleton from "../RSkeleton";
import CreateDatasetModal from "./CreateDatasetModal";
function ListDataset(props) {
  const [{ datasetList }] = useStateValue();
  const history = useHistory();
  return (
    <div className="px-2 py-1 mt-4 rounded mb-5" >
      <table className="table mt-3 table-hover table-dark">
        <thead className="thead text-light" style={{backgroundColor:'#443F39'}}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dataset Name</th>
            <th scope="col"> Authors </th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {datasetList ? (
            datasetList.map((v, i) => {
              return (
                <tr
                  onClick={() => history.push(`/dataset/detail/${v.id}`)}
                  key={i}
                  style={{ cursor: "pointer", fontFamily: "monospace",fontWeight:500 }}
                >
                  <td scope="row">{i + 1}</td>
                  <td>{v.dataset_name}</td>
                  <td className="pl-4">{v.author.length}</td>
                  <td>{v.created_at.split(":")[0].split("T")[0]}</td>
                </tr>
              );
            })
          ) : (
            <>
              {" "}
              <tr>
                <td scope="row">
                  <RSkeleton width={100} />
                </td>
                <td>
                  <RSkeleton />
                </td>
                <td className="pl-4">
                  <RSkeleton />
                </td>
                <td>
                  <RSkeleton />
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <RSkeleton width={100} />
                </td>
                <td>
                  <RSkeleton />
                </td>
                <td className="pl-4">
                  <RSkeleton />
                </td>
                <td>
                  <RSkeleton />
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <RSkeleton width={100} />
                </td>
                <td>
                  <RSkeleton />
                </td>
                <td className="pl-4">
                  <RSkeleton />
                </td>
                <td>
                  <RSkeleton />
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      <CreateDatasetModal create={props.create} />
    </div>
  );
}

export default ListDataset;
