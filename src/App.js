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
    {desc: "Bake the cake", check: false, visibility: false}
  ]);



  return (
    <div id="cooking-bot">
      {instr.map((inst, i) => <Ingredient  key={i} setInstr={setInstr} instr={instr} index={i}/> )}
    </div>
  );
}

export default App;
