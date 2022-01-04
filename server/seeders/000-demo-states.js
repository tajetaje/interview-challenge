'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('StateInformation', [
      {
        id: 1,
        state: "California",
        pop: 39613493,
        growth: "0.0038",
        pop2018: 39461588,
        pop2010: 37319502,
        growth_since2010: "0.0615",
        percent: "0.1184",
        density: "254.2929"
      },
      {
        id: 2,
        state: "Texas",
        pop: 29730311,
        growth: "0.0385",
        pop2018: 28628666,
        pop2010: 25241971,
        growth_since2010: "0.1778",
        percent: "0.0889",
        density: "113.8081"
      },
      {
        id: 3,
        state: "Florida",
        pop: 21944577,
        growth: "0.0330",
        pop2018: 21244317,
        pop2010: 18845537,
        growth_since2010: "0.1644",
        percent: "0.0656",
        density: "409.2229"
      },
      {
        id: 4,
        state: "New York",
        pop: 19299981,
        growth: "-0.0118",
        pop2018: 19530351,
        pop2010: 19399878,
        growth_since2010: "-0.0051",
        percent: "0.0577",
        density: "409.5400"
      },
      {
        id: 5,
        state: "Pennsylvania",
        pop: 12804123,
        growth: "0.0003",
        pop2018: 12800922,
        pop2010: 12711160,
        growth_since2010: "0.0073",
        percent: "0.0383",
        density: "286.1704"
      },
      {
        id: 6,
        state: "Illinois",
        pop: 12569321,
        growth: "-0.0121",
        pop2018: 12723071,
        pop2010: 12840503,
        growth_since2010: "-0.0211",
        percent: "0.0376",
        density: "226.3967"
      },
      {
        id: 7,
        state: "Ohio",
        pop: 11714618,
        growth: "0.0033",
        pop2018: 11676341,
        pop2010: 11539336,
        growth_since2010: "0.0152",
        percent: "0.0350",
        density: "286.6944"
      },
      {
        id: 8,
        state: "Georgia",
        pop: 10830007,
        growth: "0.0303",
        pop2018: 10511131,
        pop2010: 9711881,
        growth_since2010: "0.1151",
        percent: "0.0324",
        density: "188.3054"
      },
      {
        id: 9,
        state: "North Carolina",
        pop: 10701022,
        growth: "0.0308",
        pop2018: 10381615,
        pop2010: 9574323,
        growth_since2010: "0.1177",
        percent: "0.0320",
        density: "220.1041"
      },
      {
        id: 10,
        state: "Michigan",
        pop: 9992427,
        growth: "0.0008",
        pop2018: 9984072,
        pop2010: 9877510,
        growth_since2010: "0.0116",
        percent: "0.0299",
        density: "176.7351"
      },
      {
        id: 11,
        state: "New Jersey",
        pop: 8874520,
        growth: "-0.0013",
        pop2018: 8886025,
        pop2010: 8799446,
        growth_since2010: "0.0085",
        percent: "0.0265",
        density: "1206.7609"
      },
      {
        id: 12,
        state: "Virginia",
        pop: 8603985,
        growth: "0.0121",
        pop2018: 8501286,
        pop2010: 8023699,
        growth_since2010: "0.0723",
        percent: "0.0257",
        density: "217.8776"
      },
      {
        id: 13,
        state: "Washington",
        pop: 7796941,
        growth: "0.0363",
        pop2018: 7523869,
        pop2010: 6742830,
        growth_since2010: "0.1563",
        percent: "0.0233",
        density: "117.3249"
      },
      {
        id: 14,
        state: "Arizona",
        pop: 7520103,
        growth: "0.0506",
        pop2018: 7158024,
        pop2010: 6407172,
        growth_since2010: "0.1737",
        percent: "0.0225",
        density: "66.2016"
      },
      {
        id: 15,
        state: "Tennessee",
        pop: 6944260,
        growth: "0.0255",
        pop2018: 6771631,
        pop2010: 6355311,
        growth_since2010: "0.0927",
        percent: "0.0208",
        density: "168.4069"
      },
      {
        id: 16,
        state: "Massachusetts",
        pop: 6912239,
        growth: "0.0043",
        pop2018: 6882635,
        pop2010: 6566307,
        growth_since2010: "0.0527",
        percent: "0.0207",
        density: "886.1845"
      },
      {
        id: 17,
        state: "Indiana",
        pop: 6805663,
        growth: "0.0165",
        pop2018: 6695497,
        pop2010: 6490432,
        growth_since2010: "0.0486",
        percent: "0.0203",
        density: "189.9644"
      },
      {
        id: 18,
        state: "Missouri",
        pop: 6169038,
        growth: "0.0077",
        pop2018: 6121623,
        pop2010: 5995974,
        growth_since2010: "0.0289",
        percent: "0.0184",
        density: "89.7419"
      },
      {
        id: 19,
        state: "Maryland",
        pop: 6065436,
        growth: "0.0049",
        pop2018: 6035802,
        pop2010: 5788645,
        growth_since2010: "0.0478",
        percent: "0.0181",
        density: "624.8518"
      },
      {
        id: 20,
        state: "Colorado",
        pop: 5893634,
        growth: "0.0356",
        pop2018: 5691287,
        pop2010: 5047349,
        growth_since2010: "0.1677",
        percent: "0.0176",
        density: "56.8653"
      },
      {
        id: 21,
        state: "Wisconsin",
        pop: 5852490,
        growth: "0.0078",
        pop2018: 5807406,
        pop2010: 5690475,
        growth_since2010: "0.0285",
        percent: "0.0175",
        density: "108.0633"
      },
      {
        id: 22,
        state: "Minnesota",
        pop: 5706398,
        growth: "0.0179",
        pop2018: 5606249,
        pop2010: 5310828,
        growth_since2010: "0.0745",
        percent: "0.0171",
        density: "71.6641"
      },
      {
        id: 23,
        state: "South Carolina",
        pop: 5277830,
        growth: "0.0381",
        pop2018: 5084156,
        pop2010: 4635649,
        growth_since2010: "0.1385",
        percent: "0.0158",
        density: "175.5707"
      },
      {
        id: 24,
        state: "Alabama",
        pop: 4934193,
        growth: "0.0095",
        pop2018: 4887681,
        pop2010: 4785437,
        growth_since2010: "0.0311",
        percent: "0.0147",
        density: "97.4271"
      },
      {
        id: 25,
        state: "Louisiana",
        pop: 4627002,
        growth: "-0.0070",
        pop2018: 4659690,
        pop2010: 4544532,
        growth_since2010: "0.0181",
        percent: "0.0138",
        density: "107.0966"
      },
      {
        id: 26,
        state: "Kentucky",
        pop: 4480713,
        growth: "0.0044",
        pop2018: 4461153,
        pop2010: 4348181,
        growth_since2010: "0.0305",
        percent: "0.0134",
        density: "113.4760"
      },
      {
        id: 27,
        state: "Oregon",
        pop: 4289439,
        growth: "0.0257",
        pop2018: 4181886,
        pop2010: 3837491,
        growth_since2010: "0.1178",
        percent: "0.0128",
        density: "44.6872"
      },
      {
        id: 28,
        state: "Oklahoma",
        pop: 3990443,
        growth: "0.0127",
        pop2018: 3940235,
        pop2010: 3759944,
        growth_since2010: "0.0613",
        percent: "0.0119",
        density: "58.1740"
      },
      {
        id: 29,
        state: "Connecticut",
        pop: 3552821,
        growth: "-0.0052",
        pop2018: 3571520,
        pop2010: 3579114,
        growth_since2010: "-0.0073",
        percent: "0.0106",
        density: "733.7507"
      },
      {
        id: 30,
        state: "Utah",
        pop: 3310774,
        growth: "0.0499",
        pop2018: 3153550,
        pop2010: 2775332,
        growth_since2010: "0.1929",
        percent: "0.0099",
        density: "40.2918"
      },
      {
        id: 31,
        state: "Puerto Rico",
        pop: 3194374,
        growth: "0.0003",
        pop2018: 3193354,
        pop2010: 3721525,
        growth_since2010: "-0.1416",
        percent: "0.0095",
        density: "923.4964"
      },
      {
        id: 32,
        state: "Nevada",
        pop: 3185786,
        growth: "0.0523",
        pop2018: 3027341,
        pop2010: 2702405,
        growth_since2010: "0.1789",
        percent: "0.0095",
        density: "29.0195"
      },
      {
        id: 33,
        state: "Iowa",
        pop: 3167974,
        growth: "0.0061",
        pop2018: 3148618,
        pop2010: 3050745,
        growth_since2010: "0.0384",
        percent: "0.0095",
        density: "56.7158"
      },
      {
        id: 34,
        state: "Arkansas",
        pop: 3033946,
        growth: "0.0080",
        pop2018: 3009733,
        pop2010: 2921964,
        growth_since2010: "0.0383",
        percent: "0.0091",
        density: "58.3059"
      },
      {
        id: 35,
        state: "Mississippi",
        pop: 2966407,
        growth: "-0.0049",
        pop2018: 2981020,
        pop2010: 2970548,
        growth_since2010: "-0.0014",
        percent: "0.0089",
        density: "63.2186"
      },
      {
        id: 36,
        state: "Kansas",
        pop: 2917224,
        growth: "0.0020",
        pop2018: 2911359,
        pop2010: 2858190,
        growth_since2010: "0.0207",
        percent: "0.0087",
        density: "35.6808"
      },
      {
        id: 37,
        state: "New Mexico",
        pop: 2105005,
        growth: "0.0059",
        pop2018: 2092741,
        pop2010: 2064552,
        growth_since2010: "0.0196",
        percent: "0.0063",
        density: "17.3540"
      },
      {
        id: 38,
        state: "Nebraska",
        pop: 1951996,
        growth: "0.0137",
        pop2018: 1925614,
        pop2010: 1829542,
        growth_since2010: "0.0669",
        percent: "0.0058",
        density: "25.4087"
      },
      {
        id: 39,
        state: "Idaho",
        pop: 1860123,
        growth: "0.0626",
        pop2018: 1750536,
        pop2010: 1570746,
        growth_since2010: "0.1842",
        percent: "0.0056",
        density: "22.5079"
      },
      {
        id: 40,
        state: "West Virginia",
        pop: 1767859,
        growth: "-0.0202",
        pop2018: 1804291,
        pop2010: 1854239,
        growth_since2010: "-0.0466",
        percent: "0.0053",
        density: "73.5443"
      },
      {
        id: 41,
        state: "Hawaii",
        pop: 1406430,
        growth: "-0.0100",
        pop2018: 1420593,
        pop2010: 1363963,
        growth_since2010: "0.0311",
        percent: "0.0042",
        density: "218.9678"
      },
      {
        id: 42,
        state: "New Hampshire",
        pop: 1372203,
        growth: "0.0138",
        pop2018: 1353465,
        pop2010: 1316762,
        growth_since2010: "0.0421",
        percent: "0.0041",
        density: "153.2674"
      },
      {
        id: 43,
        state: "Maine",
        pop: 1354522,
        growth: "0.0115",
        pop2018: 1339057,
        pop2010: 1327629,
        growth_since2010: "0.0203",
        percent: "0.0040",
        density: "43.9167"
      },
      {
        id: 44,
        state: "Montana",
        pop: 1085004,
        growth: "0.0229",
        pop2018: 1060665,
        pop2010: 990697,
        growth_since2010: "0.0952",
        percent: "0.0032",
        density: "7.4547"
      },
      {
        id: 45,
        state: "Rhode Island",
        pop: 1061509,
        growth: "0.0030",
        pop2018: 1058287,
        pop2010: 1053959,
        growth_since2010: "0.0072",
        percent: "0.0032",
        density: "1026.6044"
      },
      {
        id: 46,
        state: "Delaware",
        pop: 990334,
        growth: "0.0257",
        pop2018: 965479,
        pop2010: 899593,
        growth_since2010: "0.1009",
        percent: "0.0030",
        density: "508.1242"
      },
      {
        id: 47,
        state: "South Dakota",
        pop: 896581,
        growth: "0.0204",
        pop2018: 878698,
        pop2010: 816166,
        growth_since2010: "0.0985",
        percent: "0.0027",
        density: "11.8265"
      },
      {
        id: 48,
        state: "North Dakota",
        pop: 770026,
        growth: "0.0158",
        pop2018: 758080,
        pop2010: 674715,
        growth_since2010: "0.1413",
        percent: "0.0023",
        density: "11.1596"
      },
      {
        id: 49,
        state: "Alaska",
        pop: 724357,
        growth: "-0.0147",
        pop2018: 735139,
        pop2010: 713910,
        growth_since2010: "0.0146",
        percent: "0.0022",
        density: "1.2694"
      },
      {
        id: 50,
        state: "District of Columbia",
        pop: 714153,
        growth: "0.0180",
        pop2018: 701547,
        pop2010: 605226,
        growth_since2010: "0.1800",
        percent: "0.0021",
        density: "11707.4262"
      },
      {
        id: 51,
        state: "Vermont",
        pop: 623251,
        growth: "-0.0018",
        pop2018: 624358,
        pop2010: 625879,
        growth_since2010: "-0.0042",
        percent: "0.0019",
        density: "67.6197"
      },
      {
        id: 52,
        state: "Wyoming",
        pop: 581075,
        growth: "0.0060",
        pop2018: 577601,
        pop2010: 564487,
        growth_since2010: "0.0294",
        percent: "0.0017",
        density: "5.9847"
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StateInformation', null, {});
  }
};
