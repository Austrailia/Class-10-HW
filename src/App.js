
import './App.css';

const cars = [
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.eXlitpR6x86dnuGSghY2eQHaFj&pid=Api&P=0&w=230&h=174",
    model: "F-450",
    brand: "FORD",
  },

  {
    img: "https://tse4.mm.bing.net/th?id=OIP.PkcDdU0Rl_SMKQY0_7CUhQHaFF&pid=Api&P=0&w=259&h=179",
    model: "MERIVA",
    brand: "CHEVROLET",
  },

  {
    img: "https://s1.cdn.autoevolution.com/images/gallery/INFINITI-I30-I35-3259_6.jpeg",
    model: "I35",
    brand: "INFINITI",
  },

  {
    img: "https://www.hdcarwallpapers.com/walls/cadillac_sts_car-wide.jpg",
    model: "STS",
    brand: "CADILLAC",
  },

  {
    img: "http://consumerguide.com/wp-content/uploads/2014/06/98101261990115.jpg",
    model: "CONCORDE",
    brand: "CHRYSLER",
  },

  {
    img: "http://cdcssl.ibsrv.net/autodata/images/?IMG=USC50GMV133A021001.JPG",
    model: "SAVANA 3500",
    brand: "GMC",
  },

  {
    img: "https://assets.newcars.com/images/car-pictures/original/2018-Mitsubishi-Outlander-SUV-ES-4dr-Front-wheel-Drive-Photo-13.png",
    model: "OUTLANDER",
    brand: "MITSUBISHI",
  },

  {
    img: "https://s1.paultan.org/image/2015/01/01-New-Nissan-Almera_NISMO.jpg",
    model: "ALMERA",
    brand: "NISSAN",
  },

  {
    img: "https://tse4.mm.bing.net/th?id=OIP.iDag7DtEhHWz2sMsLyXdCgHaE7&pid=Api&P=0&w=260&h=174",
    model: "SL600",
    brand: "MERCEDES-BENZ",
  },
]

const App = () => {
  return (
    <div className="App">
      {cars.map((v) => (
        <Card img={v.img} model={v.model} brand={v.brand} />
      ))}
    </div>
  );
};

const Card = ({ img, model, brand }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={img} alt="" />
        <h1>{model}</h1>
        <p>{brand}</p>
      </div>
    </div>
  );
};



export default App;
