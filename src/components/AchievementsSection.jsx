import React from "react";

const achievementsList = [
  {
    metric: "Years of experience",
    value: "7+",
  },
  {
    metric: "IT sector related awards",
    value: "3",
  },
  {
    metric: "Successful projects",
    value: "30",
  },

];

const AchievementsSection = () => {
  return(
    <div className="py-8 px-1 xl:gap-5 sm:py-5 xl:px-15">
      
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-17 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            > 
              <h2 className="text-white text-4xl font-bold">
                {achievement.value}
              </h2> 
              <p className="text-[#ADB7BE] text-base">
                {achievement.metric}
              </p>
            </div>
            

          );
        })}
        
      </div>
    </div>
  )
  
}




export default AchievementsSection;