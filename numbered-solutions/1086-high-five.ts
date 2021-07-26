function highFive(items: number[][]): number[][] {
  const studentHash: Record<number, number[]> = {};

  //create consolidated table of id/sum of scores
  items.forEach(([id, score]) => {
    if (studentHash[id]) {
      studentHash[id].push(score);
    }
    else {
      studentHash[id] = [score];
    }
  })

  //now calculate averages and return as array
    return Object.keys(studentHash).map(id => {
        const avg = studentHash[id].sort((a,b) => b-a).slice(0,5).reduce((sum,grade) => sum+grade,0)/5;
        return [id,Math.floor(avg)];
    }) as number[][]
   
};