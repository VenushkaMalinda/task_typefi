import { Space, Table, Tag } from 'antd';
import { FolderOpenFilled } from '@ant-design/icons';


const App = (props) => {

    const columns = [
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
        },
        {
          title: 'Queued',
          dataIndex: 'queued',
          key: 'queued',
        },
        {
          title: 'Started',
          dataIndex: 'started',
          key: 'started',
        },
        {
          title: 'Ended',
          dataIndex: 'ended',
          key: 'ended',
        },
        {
          title: 'Duration',
          dataIndex: 'duration',
          key: 'duration'
        },
        
        
      ];

    const data = [
        {
          key: props.id,
          status: props.jobStatus,
          queued: props.queued,
          started: props.started,
          ended: props.ended,
          duration: props.duration+"ms" 
        }
      ];
    return(
        <>
            <div style={{color:"blue"}}><FolderOpenFilled /> {" "}{props.path}</div>
            <Table dataSource={data} columns={columns} pagination={false}></Table>

        </>
    );
}

export default App;