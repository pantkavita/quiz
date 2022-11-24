const myquiz =[
    {
        question:"Q1: Which of the following command can be used in mongo shell to show all the databases in your MongoDB instance? ",
        a:"show dbs",
        b:"show databases",
        c:"show dbs -all",
        d:" ls dbs",
        ans:"ans1",        
    },
    {
        question:"Q2: Which of the following is supported by MongoDB? ",
        a:" ACID Transactions",
        b:"Relationships between Collections (Primary Key � Foreign Key)",
        c:"Journaling",
        d:"Transaction Management",
        ans:"ans3",               
    },
    {
        question:"Q3: Which of the following commands removes a single document that matches the condition that Author is Joe? ",
        a:" db.posts.removeOne( { Author : “Joe” }, 1 )",
        b:"db.posts.remove( { Author : “Joe” }, 1 )",
        c:"db.posts.remove( { Author : “Joe” }, {justOne: true} )",
        d:"Both b and c",
        ans:"ans4",               
    },
    {
        question:"Q4: Which of the following methods can be used on a cursor object? ",
        a:" cursor.next()",
        b:"cursor.hasNext()",
        c:"cursor.forEach()",
        d:"All of the above",
        ans:"ans4",               
    },
    {
        question:"Q5: For capped collection, cursors which do not automatically close and remain open after the client exhausts the results are called:  ",
        a:"Capped Cursors",
        b:"Tailable Cursors",
        c:"Open Cursors",
        d:"Indexing Cursors",
        ans:"ans2",               
    }, 
    {
        question:"Q6: Which of the following aggregation commands in MongoDB does not support sharded collections?  ",
        a:"aggregate",
        b:"mapReduce",
        c:"group",
        d:"All of the above",
        ans:"ans3",               
    },
    {
        question:"Q7: Which command can be used to rebuild the indexes on a collection in MongoDB? ",
        a:"db.collection.createIndex({reIndex:1})",
        b:"db.collection.createIndex({author:1}).reIndex()",
        c:"db.collection.reIndex()",
        d:"db.collection.reIndex({author:1})",
        ans:"ans3",               
    },
    {
        question:"Q8: The data model available within MongoDB allows us to represent ___. ",
        a:"Hierarchical relationships",
        b:"Able to handle complex structures",
        c:"Both A. and B.",
        d:"None of the mentioned above",
        ans:"ans3",               
    },
    {
        question:"Q9: A record in MongoDB is a ___. ",
        a:"Document",
        b:"table",
        c:"Application",
        d:"None of the mentioned above",
        ans:"ans1",               
    },
    {
        question:"Q10: MongoDB stores documents in ___.  ",
        a:"store",
        b:"collections",
        c:"indexes",
        d:"none of the above",
        ans:"ans2",               
    },
    {
        question:"Q11: The Collections screen ___ the existing collections. ",
        a:"Lists",
        b:"Package",
        c:"Network",
        d:"None of the mentioned above",
        ans:"ans1",               
    },
    {
        question:"Q12:A document is a set of ___.  ",
        a:"Key-value pairs",
        b:"Application pairs",
        c:"Activity pair set",
        d:"None of the mentioned above",
        ans:"ans1",               
    },
    {
        question:"Q13: The document structure is more in line with how developers construct their ___.  ",
        a:"Network and security",
        b:"Classes and objects",
        c:"Tables and relations",
        d:"None of the mentioned above",
        ans:"ans2",               
    },
    {
        question:"Q14: Cursor is a pointer to the result set of a ___. ",
        a:"Query",
        b:"Table",
        c:"Dataset",
        d:"None of the mentioned above",
        ans:"ans1",               
    },
    {
        question:"Q15: Field is a name-value pair in a ___. ",
        a:"Attribute",
        b:"Table",
        c:"Document",
        d:"None of the mentioned above",
        ans:"ans3",               
    },
    {
        question:"Q16: MongoDB supports searching by ___. ",
        a:"Field",
        b:"Range queries",
        c:"Regular expression searches",
        d:"All of the mentioned above",
        ans:"ans4",               
    },
    {
        question:"Q17: Indexes can be created to improve the performance of searches within ___. ",
        a:"MongoDB",
        b:"NoSQL",
        c:"Both A. and B",
        d:"None of the mentioned above",
        ans:"ans3",               
    },
    {
        question:"Q18: NoSQL is not a ___. ",
        a:"Relational Database",
        b:"Network Database",
        c:"Communication set",
        d:"None of the mentioned above",
        ans:"ans1",               
    },
    {
        question:"Q19: During the year ___, Dwight Merriman, Eliot Horowitz, and Kevin Ryan developed MongoDB. ",
        a:"2007",
        b:"2008",
        c:"2009",
        d:"None of the mentioned above",
        ans:"ans1",               
    },
    {
        question:"Q20: MongoDB was first developed by ___ Software in 2007. ",
        a:"9 gen",
        b:"10gen",
        c:"12 gen",
        d:"All of the mentioned above",
        ans:"ans2",               
    },
    {
        question:"Q21:Database_name is a MongoDB command is used for ___.  ",
        a:"Database creation",
        b:"Dropping databases",
        c:"Creating a Collection",
        d:"All of the mentioned above",
        ans:"ans1",               
    },
    {
        question:"Q22: In MongoDB, db.dropDatabase () is used for ___. ",
        a:"Database creation",
        b:"Dropping databases",
        c:"Creating a Collection",
        d:"All of the mentioned above",
        ans:"ans2",               
    },
    {
        question:"Q23: Amongst which of the following is / are the command used to create collection in MongoDB? ",
        a:"Db.dropDatabase()",
        b:"Db.createCollection()",
        c:"Both A. and B.",
        d:"None of the mentioned above",
        ans:"ans2",               
    },
    {
        question:"Q24: Amongst which of the following is / are the data types of MongoDB? ",
        a:"Timestamp",
        b:"Object",
        c:"Symbol",
        d:"All of the mentioned above",
        ans:"ans4",               
    },
    {
        question:"Q25: To create an index, you need to use ___ method of MongoDB. ",
        a:"createTable();",
        b:"createIndex();",
        c:"createData();",
        d:"None of the mentioned above",
        ans:"ans2",               
    },
    {
        question:"Q26: Aggregation operations in MongoDB ___ values from multiple documents. ",
        a:"Dataset",
        b:"set",
        c:"Group",
        d:"None of the mentioned above",
        ans:"ans3",               
    },
    {
        question:"Q27: MongoDB achieves replication by the use of ___. ",
        a:"Replica Set",
        b:"Data set",
        c:"$first",
        d:"All of the mentioned above",
        ans:"ans1",               
    },
    {
        question:"Q28: In MongoDB, Sharding is the process of ___ across multiple machines. ",
        a:"Drop data sets",
        b:"Storing data records",
        c:"Truncate data records",
        d:"All of the mentioned above",
        ans:"ans2",               
    },
    {
        question:"Q29: Amongst which of the following is / are used to create backup of database in MongoDB? ",
        a:"Mongodump command",
        b:"Mongodelete command",
        c:"Mongotruncate command",
        d:"None of the mentioned above",
        ans:"ans1",               
    },
    {
        question:"Q30: Amongst which of the following MongoDB command is used to import the data from various sources? ",
        a:"Mongoimport",
        b:"Mongoexport",
        c:"Mongotruncate",
        d:"None of the mentioned above",
        ans:"ans1",               
    },
    {
        question:"Q31: In MongoDB, mongoreplay is a ___. ",
        a:"Traffic capture",
        b:"Replay tool",
        c:"Both a and b",
        d:"None of the mentioned above",
        ans:"ans3",               
    },
    {
        question:"Q32: Amongst which of the following is / are the features of MongoDB? ",
        a:"Authentication",
        b:"Encryption",
        c:"Access Control",
        d:"All of the mentioned above",
        ans:"ans4",               
    },
    {
        question:"Q33: The MongoDB is written in ……………… language. ",
        a:"C++",
        b:"Javascript",
        c:"C",
        d:"All of the mentioned above",
        ans:"ans4",               
    },
    {
        question:"Q34: A collection and a document in MongoDB is equivalent to…………. Concepts respectively. ",
        a:"Table and Column",
        b:"Table and Row",
        c:"Column and Row",
        d:"Database and Table",
        ans:"ans2",               
    },
    {
        question:"Q35: In how much time the MongDB writes are written to the journal? ",
        a:"100 s",
        b:"60 s",
        c:"1 s",
        d:"100 ms",
        ans:"ans4",               
    },
    {
        question:"Q36: What is MongoDB? ",
        a:"data growth",
        b:"document database",
        c:"adminCommand",
        d:"Combine objects",
        ans:"ans2",               
    },
    {
        question:"Q37: The concatenation of the collection name and database name is called a - ",
        a:"Namespace",
        b:"MongoDB",
        c:"sharding",
        d:"replica",
        ans:"ans1",               
    },
    {
        question:"Q38: What is the good alternatives to MongoDB? ",
        a:"Redis & CouchDB",
        b:"Cassandra",
        c:"Riak & Hbase",
        d:"All of the mentioned",
        ans:"ans4",               
    },
    {
        question:"Q39: Which statements is correct about mongoose in MongoDB ? ",
        a:"it is Java library to connect with MongoDB",
        b:"It is used for modeling your application data in node.js",
        c:"It is Python library to connect with MongoDB",
        d:"It is a PHP library to connect with MongoDB",
        ans:"ans2",               
    },
    {
        question:"Q40: The application, that communicates with application MongoDB by way of a client library, is called _________________ . ",
        a:"Parent",
        b:"Driver",
        c:"Rank",
        d:" None of the above",
        ans:"ans2",               
    },
    {
        question:"Q41: _____________________sorting is not supported by MongoDB. ",
        a:"collection",
        b:"collation",
        c:"heap",
        d:"none of the mentioned above",
        ans:"ans2",               
    },
    {
        question:"Q42: In MongoDB , write operations are atomic at the   _____ level. ",
        a:"collection",
        b:"document",
        c:"row",
        d:"all of the above",
        ans:"ans2",               
    },
    {
        question:"Q43: _______ strategy is used to explicitly avoid document growth. ",
        a:"deallocation",
        b:"allocation",
        c:"pre-allocation",
        d:"none of the above",
        ans:"ans3",               
    },
    {
        question:"Q44: The ____ field provides the amount of resident memory in use. ",
        a:"mem.resident",
        b:"memory.resident",
        c:"mem.residents",
        d:"all of the above",
        ans:"ans1",               
    },
    {
        question:"Q45: When the TTL thread is active, you will see _____ operations in the output of db.currentOp(). ",
        a:"read",
        b:"update",
        c:"delete",
        d:"all of the above",
        ans:"ans3",               
    },
    {
        question:"Q46: ______ does not dump the content of the local database. ",
        a:"mongoshell",
        b:"mongodump",
        c:"mongolocaldump",
        d:"none of the above",
        ans:"ans2",               
    },
    {
        question:"Q47: To backup all the databases in a cluster via mongodump, you should have the _____ role. ",
        a:"restore",
        b:"backup",
        c:"replication",
        d:"all of the above",
        ans:"ans2",               
    },
    {
        question:"Q48: ______ is a routing service for MongoDB shared configurations that processes queries from the application layer.",
        a:"mongod",
        b:"mongos",
        c:"mongocon",
        d:"none of the above",
        ans:"ans2",               
    },
    {
        question:"Q49: Which of the following format is supported by MongoDB ?",
        a:"SQL",
        b:"XML",
        c:"BSON",
        d:"none of the above",
        ans:"ans3",               
    },
    {
        question:"Q50: MongoDB has been adopted as ______ software by a number of major websites and services.",
        a:"frontend",
        b:"backend",
        c:" proprietary ",
        d:"none of the above",
        ans:"ans2",               
    },
]

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let score = 0;


let questionCount = 0;
const loadQuestion = () => {
    // question.innerText= myquiz [0].question ;
    const questionList = myquiz[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}
loadQuestion();


const getAnswerCheck = () => {
    let answer2;
    answers.forEach((currElement) => {
        if (currElement.checked) {
            answer2 = currElement.id;
        }

    });
    return answer2;
}

const disSelectAll=()=>{
    answers.forEach((currElement) => currElement.checked=false )
}
submit.addEventListener('click', () => {
    const checkedAnswer = getAnswerCheck();
    console.log(checkedAnswer)
    if (checkedAnswer === myquiz[questionCount].ans) {
        score++;
    }
    questionCount++;
    total.innerHTML=`
    <span> ${questionCount}/${myquiz.length}</span>`;
    disSelectAll();
    if (questionCount < myquiz.length) {
        loadQuestion();
    } else {
        
        showScore.innerHTML = `
        <h3> Your Score is ${score} / ${myquiz.length}  </h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});
