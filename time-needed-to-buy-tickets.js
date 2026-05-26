//In the name of cross
/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  const requiredNumberOfTickets = tickets[k];
  let time = 0;
  tickets.forEach((numTickets, index) => {
    if (numTickets < requiredNumberOfTickets) time += numTickets;
    if (numTickets >= requiredNumberOfTickets && index <= k)
      time += requiredNumberOfTickets;
    if (numTickets >= requiredNumberOfTickets && index > k)
      time += requiredNumberOfTickets - 1;
  });
  return time;
};
//Actaully we can avoid queues
/**
 * get the index see how tickets he need to buy
 * loop on every item add to time the result
 * if the tickets on the left side is higher then make it like Required tickets -1
 * / on the right side do the same but without -1
 * return the result
 */
