import Skeleton from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import CreateDatasetModal from "./CreateDatasetModal";
function ListDataset(props) {
  const [{ datasetList }] = useStateValue();
  const history = useHistory();
  return (
    <div className="bg-white px-2 py-1 mt-4 border">
      <table className="table table-hover mt-3">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Dataset Name</th>
            <th scope="col"> Authors </th>
            <th scope="col">Created At</th>
          </tr>
        </thead>
        <tbody>
          {datasetList.length > 0 ? (
            datasetList[0].map((v, i) => {
              return (
                <tr
                  onClick={() => history.push(`/dataset/detail/${v.id}`)}
                  key={i}
                  style={{ cursor: "pointer", fontFamily: "cursive" }}
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
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td className="pl-4">
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td className="pl-4">
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td className="pl-4">
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
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
