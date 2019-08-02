import React from "react";
import { Route, Switch } from "react-router-dom";
import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import Searchbar from "./Searchbar";
import paintingsData from "../paintings.json";

class PaintingsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      paintings: paintingsData.paintings,
      searchText: ""
    };
  }

  voteForPainting = id => { //state changing callback
    let updatePaintings = this.state.paintings.map(painting => {
      if (painting.id === id) {
        let newPainting = {
          ...painting,
          votes: painting.votes + 1
        };
        return newPainting;
      } else {
        return painting;
      }
    });
    this.setState({ paintings: updatePaintings });
  };

  updatePaintingInfo = (info) => { //state changing callback
    let newPaintingsArray = this.state.paintings.map(painting => {
      if (painting.id === info.paintingId) {
        return {
          ...painting,
          title: info.title,
          artist: {
            name: info.name,
            birthday: info.birthday,
            deathday: info.deathday
          }
        };
      } else {
        return painting;
      }
    });

    this.setState({ paintings: newPaintingsArray});
  };

  changeSearch = searchText => { //yet another state changing callback
    this.setState({ searchText });
  };

  filteredPaintings = () => { //generatic helper method
    return this.state.paintings.filter(
      p =>
        p.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        p.artist.name
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/paintings/:paintingId/edit"
            render={props => {
              let selectedPainting = this.state.paintings.find(
                painting => painting.id === props.match.params.paintingId
              );
              return (
                <PaintingForm painting={selectedPainting} updatePaintingInfo={this.updatePaintingInfo}/>
              );
            }}
          />
          <Route path="/paintings/:paintingId" component={PaintingDetail} />
          <Route
            path="/"
            render={() => (
              <div className="ui narrow container segment">
                <Searchbar/>
                <PaintingsList/>
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default PaintingsContainer;
