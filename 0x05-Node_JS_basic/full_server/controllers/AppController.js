/**
 * Contains the miscellaneous route handlers.
 * @author Ayoub Ajeddab <https://github.com/AjeAyoub>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
