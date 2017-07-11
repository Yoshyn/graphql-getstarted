var hashDB = {};

class Message {
  constructor(id, {content, author}) {
    console.log(id, {content, author});
    this.id = id;
    this.content = content;
    this.author = author;
  }

  static getMessage({id}) {
    if (!hashDB[id]) {
      throw new Error('no message exists with id ' + id);
    }
    return new Message(id, hashDB[id]);
  }

  static createMessage({input}) {
    // Create a random id for our "database".
    var id = require('crypto').randomBytes(10).toString('hex');
    hashDB[id] = input;
    return new Message(id, input);
  }

  static updateMessage({id, input}) {
    if (!hashDB[id]) {
      throw new Error('no message exists with id ' + id);
    }
    // This replaces all old data, but some apps might want partial update.
    hashDB[id] = input;
    return new Message(id, input);
  }
}

module.exports = Message
