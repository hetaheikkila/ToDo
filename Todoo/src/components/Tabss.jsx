import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function tabs() {

  return (

    <Tabs value={value} onChange={handleChange} centered>
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>

  )

}