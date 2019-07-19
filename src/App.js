import React, { useState } from 'react';


const Ingredient = ({instr, index, setInstr}) => {
  const ingStyle = {
    display: "none",
  };

  const handleTick = (e) => {
    if(e.target.checked && index+1 < instr.length){
      const newInstr = [...instr];
      newInstr[index+1].visibility = true;
      setInstr(newInstr);
    }else if(!e.target.checked && index > 0 && index+1 < instr.length){
      const newInstr = [...instr];
      newInstr[index+1].visibility = false;
      setInstr(newInstr);
    }
  };

  return(
    <div style={instr[index].visibility ? {} : ingStyle}>{instr[index].desc} -
      <input id={index} type="checkbox" onChange={handleTick}></input>
    </div>);
};


function App() {
  const [instr, setInstr] = useState([
    {desc: "Get The flour", check: false, visibility: true},
    {desc: "Beat the eggs", check: false, visibility: false},
    {desc: "Add Sugar", check: false, visibility: false},
    {desc: "Melt Butter", check: false, visibility: false},
    {desc: "Add chocolate chips", check: false, visibility: false},
    {desc: "Add Baking Powder", check: false, visibility: false},
    {desc: "Mix the Batter", check: false, visibility: false},
    {desc: "Heat The Oven", check: false, visibility: false},
    {desc: "Bake the Cake", check: false, visibility: false},
  ]);



  return (
    <div id="cooking-bot">
      {instr.map((_, i) => <Ingredient  key={i} setInstr={setInstr} instr={instr} index={i}/> )}
    </div>
  );
}

export default App;
