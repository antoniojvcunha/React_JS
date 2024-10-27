function MyList({ listValues }) {
    return (
      <>
        <ul>
          {listValues.map((value) => (
            <li>{value}</li>
          ))}
        </ul>
      </>
    );
  }
  
  export default MyList;