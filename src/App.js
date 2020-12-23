import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Mohamed ben Mohamed",
      bio: "I love teaching",
      imgSrc: "./myPhoto.png",
      profession: "Teacher",
      isShow: false,
      sec: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        sec: this.state.sec + 1,
      });
    }, 1000);
  }

  showProfile = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  displayTime = (timeSec) => {
    let h = Math.floor(timeSec / 3600);
    let m = Math.floor((timeSec - h * 3600) / 60);
    let s = timeSec - h * 3600 - m * 60;
    return (
      <div>
        <span>
          {String(h).padStart(2, 0)} : {String(m).padStart(2, 0)} :{" "}
          {String(s).padStart(2, 0)}
        </span>
      </div>
    );
  };

  render() {
    return (
      <div>
        <p> {this.displayTime(this.state.sec)}</p>
        <button
          onClick={this.showProfile}
          /*className={this.state.isShow ? "red" : "green"} */
        >
          {this.state.isShow ? "hide profile" : "display profile"}
        </button>

        {this.state.isShow ? (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={this.state.imgSrc} />
              <Card.Body>
                <Card.Title> {this.state.fullName} </Card.Title>
                <Card.Text>
                  <h2> I work as a {this.state.profession}</h2>
                  {this.state.bio}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <h1>click on the button to show the profile</h1>
        )}
      </div>
    );
  }
}
