const PERFORMANCE = [
  {
     key : 'goals',
     label:'Goals',
     slug:'Goals',
     icon:{
      type : "FontAwesome", 
      name:"soccer-ball-o", 
      size:15
     },
     color:'#79B1BF',
     message:'No Goals'
  },
  {
     key : 'assists',
     label:'Assists',
     slug:'Assists',
     icon:{
      type:"MaterialCommunityIcons", name:"lastpass" , size:15 
     },
     color:'#CBB67D',
     message:'No Assists'
  },
  {
     key : 'play_time',
     label:'Play Time',
     slug:'Time',
     icon:{
      type:"MaterialIcons" , style:{ color: 'white', marginRight: 2 }, name:"timer", size:15
     },
     color:'#F2D658',
      message:'No Time'
  },
  {
     key : 'red_cards',
     label:'Red Cards',
     slug:'Red',
     icon:{
      type:"MaterialCommunityIcons", name:"cards" , size:15 
     },
     color:'#8A0026',
      message:'No Red'
  }, 
  {
     key : 'yellow_cards',
     label:'Yellow Cards',
     slug:'Yellow',
     icon:{
      type:"MaterialCommunityIcons", name:"cards" , size:15 
     },
     color:'#DFB500',
     message:'No Yellow'
  },
] ;

export default  PERFORMANCE;