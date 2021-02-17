function DinnerSupplies({totalGuests}) {
  return(
    <>
      <h2>Dinner Supplies</h2>
      <div>
        Spoons: {totalGuests * 2}
      </div>
      <div>
        Forks: {totalGuests * 2}
      </div>
      <div>
        Knives: {totalGuests * 2}
      </div>
    </>
  );
} 

export default DinnerSupplies;