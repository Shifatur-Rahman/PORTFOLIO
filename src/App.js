import React from 'react';
import TopBanner from "./components/TopBanner/TopBanner.js"
import Services from "./components/Services/Services";
import TopNavigator from "./components/TopNavigator/TopNavigator";
import Analysis from "./components/Analysis/Analysis";
import Summary from "./components/Summary/Summary";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import Courses from "./components/Courses/Courses";
import Video from "./components/Video/Video";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">

        <TopNavigator />
<TopBanner />
<Services />

<Analysis />
<Summary />
<RecentProjects />
<Courses />
<Video />
<Review />
<Footer />


    </div>
  );
}

export default App;
