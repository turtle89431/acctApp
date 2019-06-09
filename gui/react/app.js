import React, { Fragment } from "react";
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.window = this.props.window;

    this.state = this.props.state;
    this.setState = this.props.window.Main.setState;
    this.ipc = this.props.ipc;
  }
  UNSAFE_componentWillMount() {
    let d = new Date()
    this.ipc.set({ date: `${d.getMonth()}-${d.getDay()}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}` });
    this.ipc.reply();
  }

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <div className="row">
            <table
              class="table table-dark table-striped col-11 "
              style={{ width: "100%", margin: "auto" }}
            >
              <caption style={{ captionSide: "top" }}>
                last updated {this.state.date}
              </caption>
              <thead className="text-center">
                <tr>
                  <th width={"60%"}>Discription</th>
                  <th>AMT</th>
                  <th>Bal</th>
                </tr>
              </thead>
              <tbody>
                <tr class="form">
                  <td>
                    <input
                      id="disc"
                      className="form-control"
                      placeholder="Discription"
                    />
                  </td>
                  <td>
                    <input
                      id="amt"
                      type="number"
                      className="form-control"
                      placeholder="Amount"
                    />
                  </td>
                  <td>
                    <button className="btn w-100">Record</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Fragment>
    );
  }
}
