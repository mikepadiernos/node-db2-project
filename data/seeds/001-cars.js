exports.seed = async function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: '1GB2K0CG0D0011781', make: 'Chevrolet', model: 'Traverse', mileage: 2580, transmission: 'automatic', status: 'clean'},
        {id: 2, vin: 'SCFAC02E79GB10833', make: 'Aston Martin', model: 'Vantage', mileage: 382, transmission: 'manual', status: 'memorandum'},
        {id: 3, vin: 'WVWAS91K060016145', make: 'Volkswagen', model: 'DSG', mileage: 1076, transmission: 'semi-automatic', status: 'owner retained'}
      ]);
    });
};
