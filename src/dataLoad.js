import { Collapse, Select } from 'antd';
import { useState } from 'react';
import data from './JobJsonFile.json';
import Table from './table';
const { Panel } = Collapse;
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const App = () => {
  const [expandIconPosition, setExpandIconPosition] = useState('start');
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = (owner,name,jobStatus,endTime) => (
        <div style={{marginLeft : "0px"}}><span >{owner}</span>{" "}<span style={{color : "red" , fontWeight : "bold" }}>{jobStatus}</span> on {endTime.slice(0,10)}</div>  
  );
  
  return (
    <>
    {
        data && data.jobs.map(data =>{
            return(
                <Collapse
                    defaultActiveKey={['1']}
                    onChange={onChange}
                    expandIconPosition={expandIconPosition}
                >
                <Panel  header={data.name} key={data.id} extra={genExtra(data.owner,data.duration,data.jobStatus,data.endTime)}>
                <div><Table key={data.id} jobStatus={data.jobStatus} queued={data.queuedTime.slice(0,10)+" "+data.queuedTime.slice(12,19)} started={data.startTime.slice(12,19)} ended={data.endTime.slice(12,19)} duration={data.duration} path={data.path}/></div>
                 </Panel>    
                </Collapse>
            )
        })
    }
    
       
      
      
    </> 
    
  );
};
export default App;