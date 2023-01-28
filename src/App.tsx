import { useEffect, useState } from 'react';
import * as C from './styles/App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/infoArea';
import { InputArea } from './components/form';

let item = new Date();
function App() {
  const [list, setList] = useState(items);
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpese] = useState(0);

  function handleMonthChange(newMonth: string) {
    setCurrentMonth(newMonth);
  }

  console.log(currentMonth);

  useEffect(() => {
    setFilterList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for(let i in filterList){
      if(categories[filterList[i].category].expense){
        expenseCount+= filterList[i].value
      }else{
        incomeCount+= filterList[i].value
      }
    }
    setIncome(incomeCount)
    setExpese(expenseCount)
  }, [filterList]);

const handleAdd=(item: Item)=>{
  let newlist = [...list]
  newlist.push(item)
  setList(newlist)
}


  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth}
          income={income}
          expense={expense}
        />
        <InputArea onAdd={handleAdd}/>
        <TableArea list={filterList} />
      </C.Body>
    </C.Container>
  );
}

export default App;
