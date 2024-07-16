import styles from './List.module.css'

function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map(items => (
                                        <li key={items.id}>
                                        {items.name}: &nbsp;
                                        <b>{items.calories}</b>
                                        </li>
                                    ));
                                    
  return (
    <>
      <h3 className={styles['list-category']}  >{category}</h3>
      <ol className={styles['list-item']}  >{listItems}</ol>
    </>
  );
}

export default List;
