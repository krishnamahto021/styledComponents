import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form className="form"
      >
        <h3 className='heading'>Sign Up</h3>
        <input className="input"  placeholder="Username" />
        <input className="input" placeholder="Email" />
        <input className="input" placeholder="Password" />
        <div className="buttons"
        >
          <button className="button"

          >
            Cancel
          </button>
          <button className="button"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};


