import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import ReviewCard from "./components/ReviewCard";
import PromoBanner from "./components/PromoBanner";
import ChatInterface from "./components/ChatInterface";
import VerticalSidebar from "./components/VerticalSideBar";
import BattlesCardWrapper from "./components/BattelsCardWrapper";
import Footer from "./components/Footer";
import FeaturedBoxesHeader from "./components/FeaturedBoxesHeader";
import LatestBattlesHeader from "./components/LatestHeader";
import LatestBattlesCards from "./components/LatestBattlesCards";

import SignupBanner from "./components/SignupBanner";
import EarnBanner from "./components/EarnBanner";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main-content">
        <div className="left-sidebar">
          <VerticalSidebar />
        </div>

        <div className="center-content">
          <div className="slice">
            <div style={{ display: "flex", gap: "14px", padding: "10px" }}>
              <SignupBanner />
              <EarnBanner />
            </div>
          </div>

          <div className="featured-boxes">
            <FeaturedBoxesHeader />

            <div className="card-grid">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <LatestBattlesHeader />

          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            {" "}
            <BattlesCardWrapper />
            <BattlesCardWrapper />
            <BattlesCardWrapper />
            <BattlesCardWrapper />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>

        <div className="right-sidebar">
          <ChatInterface />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
