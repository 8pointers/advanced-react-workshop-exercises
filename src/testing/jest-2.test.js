import AddressBook from './jest-2';

describe('AddressBook', () => {
  const [alice, bob, charlie, dave] = ['Alice', 'Bob', 'Charlie', 'Dave'];
  let addressBook;
  beforeEach(() => {
    addressBook = new AddressBook([alice, bob, charlie]);
  });
  it('should be able to add new entries', () => {
    addressBook.add(dave);
    expect(addressBook.entries).toEqual([alice, bob, charlie, dave]);
  });
  it('should be able to remove existing entries', () => {
    addressBook.remove(bob);
    expect(addressBook.entries).toEqual([alice, charlie]);
  });
});
