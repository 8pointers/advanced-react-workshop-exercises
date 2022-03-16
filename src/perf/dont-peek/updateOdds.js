const updateOdds = (
  {
    market: {
      selection: { odds, ...selection },
      ...market
    },
    ...event
  },
  newOdds
) => ({ ...event, market: { ...market, selection: { ...selection, odds: newOdds } } });
