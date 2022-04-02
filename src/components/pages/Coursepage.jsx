import { CourseTop } from "../Other/CourseTop";
import "../Style/CoursePage.css";
import "../Style/Button.css";
import { IntroductionSection } from "../Other/IntroductionSection";
import { PlusSubscription } from "../Other/PlusSubscription";
import { LiteSubscription } from "../Other/LiteSubscription";
import { LiveClasses } from "../Other/LiveClasses";
import { Achievers } from "../Other/Achievers";
import { BatcheSyllabus } from "../Other/BatcheSyllabus";
import { CoursesSoon } from "../Other/CoursesSoon";
import { RecentlyCourse } from "../Other/RecentlyCourse";
import { BestOfAllTime } from "../Other/BestOfAllTime";

export const CoursePage = () => {
  return (
    <div style={{ backgroundColor: "#fcfcfc" }}>
      <CourseTop />
      <IntroductionSection />
      <PlusSubscription />
      <LiteSubscription />
      <LiveClasses />
      <Achievers />
      <BatcheSyllabus />
      <CoursesSoon />
      <RecentlyCourse />
      <BestOfAllTime />
    </div>
  );
};
