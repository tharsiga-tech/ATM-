import Button from "../../atoms/button/Button";
import MainLayout from "../../templates/mainLayout/MainLayout";
import "./HomePage.css";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="atm-container">
        <div className="card-container">
          <Button onClick={() => alert("Hello")} className="card">
            {/* <img src="/icons/deposit.png" alt="Deposit" className="card-icon" /> */}
            <h2> Deposit </h2>
          </Button>

          <Button onClick={() => alert("Hello")} className="card highlight">
            {/* <img src="/icons/withdrawal.png" alt="Withdrawal" className="card-icon" /> */}
            <h2>Withdrawal</h2>
          </Button>

          <Button onClick={() => alert("Hello")} className="card">
            {/* <img src="/icons/history.png" alt="Transaction History" className="card-icon" /> */}
            <h2>Transaction History</h2>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
