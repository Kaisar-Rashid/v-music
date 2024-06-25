const CardsDisplay = ({ track }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {track.map((item) => {
            return (
              <div key={item.id} className="col-lg-3 col-md-6 py-2 gap-10">
                <div className="card">
                  <img
                    src={item.album.images[0].url}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.name.length > 22
                        ? item.name.slice(0, 22)
                        : item.name}
                    </h5>
                    <p className="card-text">
                      Artist :{" "}
                      {item.album.artists[0].name.length > 22
                        ? item.album.artists[0].name.slice(0, 22)
                        : item.album.artists[0].name}
                    </p>
                    <p className="card-text">Popularity : {item.popularity}</p>
                    <audio
                      src={item.preview_url}
                      controls
                      className="w-100"
                    ></audio>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CardsDisplay;
