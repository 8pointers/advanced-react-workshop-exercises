class AddressBook {
  constructor(entries) {
    this.entries = entries;
  }
  add(entry) {
    this.entries.push(entry);
  }
  remove(entry) {
    const index = this.entries.indexOf(entry);
    this.entries.splice(index, 1);
  }
}

export default AddressBook;
