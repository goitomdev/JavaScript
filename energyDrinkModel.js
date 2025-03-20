const model = {
  app: {
    currentPage : "login" // Possible values: 'loginPage', 'profilePage', 'registerPage', 'overViewPage'
  },

  inputs: {
    login: {
      userName: "",
      passWord: "",
    },

    registerNewUser: {
      name: "",
      email: "",
      password: "",
    },

    forgotPassword: {
      email: "",
    },

    userProfile: {
      name: "",
      drink: "",
      game: "",
      pc: "",
      console: "",
    },

    registerPage: {
      name: "Red Bull 250ml",
      price: 21.9,
      calories: 115,
      caffeine: 80,
    },

    overView: {
      unitsDrunkAmount: "",
      myGoal: "",
      moneySaved: "",
    },
  },

  data: {
    
    groups: [
      { id: 1, name: "Team Redbull" },
      { id: 2, name: "Team Monster" },
      { id: 3, name: "Team Battery" }
    ],

    
    users: [
      { id: 1, name: "Martin", email: "martin99@team3.no", password: "****", groupId: 1 },
      { id: 2, name: "Dag", email: "dag98@team3.no", password: "****", groupId: 2 },
      { id: 3, name: "Ole", email: "ole97@team3.no", password: "****", groupId: 3 }
    ],

    
    userProfiles: [
      { id: 1, userId: 1, drink: "Redbull", pc: "Gaming laptop", console: "PS5" },
      { id: 2, userId: 2, drink: "Monster", game: "WOW", pc: "PC Mega 100", console: "XBOX One" },
      { id: 3, userId: 3, drink: "Battery", game: "Minecraft", pc: "PC Ultra 5000", console: "PS4" }
    ],

    
    userGoals: [
      { id: 1, userId: 1, unitsDrunk: 0, goal: "", moneySaved: 0 },
      { id: 2, userId: 2, unitsDrunk: 0, goal: "", moneySaved: 0 },
      { id: 3, userId: 3, unitsDrunk: 0, goal: "", moneySaved: 0 }
    ],

    
    goalPeriods: [
      { id: 1, period: "day" },
      { id: 2, period: "week" },
      { id: 3, period: "month" }
    ],

  
    products: [
      { id: 1, name: "Red Bull 250ml", price: 21.9, calories: 115, caffeine: 80 },
      { id: 2, name: "Red Bull 335ml", price: 29.9, calories: 185, caffeine: 110 }
    ]
  }
};
