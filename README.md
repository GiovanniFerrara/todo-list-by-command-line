# Todo List By Command Line
Simple app developed in NodeJs that Creates, Reads and Destroys notes from the file-system.

## Getting Started

### Installing
Just clone this folder by 



```
git clone https://github.com/GiovanniFerrara/todo-list-by-command-line.git

```

and run "npm" install to install the dependencies


## Usage

The possible commands are "add, get, read, delete" followed by --title"First Message" --body=="Content of the message"

Adding a single note

```
node app.js add --title="First Message" --body="Content of the message"
```
Reading a single note

```
node app.js get --title="First Message"
```
Deleting a single note

```
node app.js delete --title="First Message"
```
Listing all the notes

```
node app.js list
```

 Built With

* [Yargs]( https://nodejs.org/it/) JavaScript runtime
* [Yargs](https://www.npmjs.com/package/yargs) - NPM Dependency 

## Version 1

## Authors

* **Giovanni Ferrara* - [Linkedin Profile](https://www.linkedin.com/in/giovanni-marco-ferrara-6aa458137/)

## License
MIT

