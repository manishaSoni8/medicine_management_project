export const individualTrialsLoader = async () => {
    try {
      const individualTrialsRes = await fetch(
        "https://medicine-management-syst-b12fe-default-rtdb.firebaseio.com/dashboards/4/.json"
      );
      const medicineTrialsRes = await fetch(
        "https://medicine-management-syst-b12fe-default-rtdb.firebaseio.com/dashboards/2/.json"
      );
  
      const individualTrialsData = await individualTrialsRes.json();
      const medicineTrialsData = await medicineTrialsRes.json();
  
      console.log("Raw Individual Trials Data:", individualTrialsData);
      console.log("Raw Medicine Trials Data:", medicineTrialsData);
  
      return { 
        individualTrials: individualTrialsData || {}, 
        medicineTrials: medicineTrialsData || {} 
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return { individualTrials: {}, medicineTrials: {} };
    }
  };
  export default individualTrialsLoader;