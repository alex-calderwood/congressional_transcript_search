import React from 'react';
import Autosuggest from 'react-autosuggest'; // See https://www.npmjs.com/package/react-autosuggest#on-suggestions-fetch-requested-prop

// Imagine you have a list of languages that you'd like to autosuggest.
const speakers = ["Bradley Byrne","Martha Roby","Mike Rogers","Robert Aderholt","Mo Brooks","Gary Palmer","Terri Sewell","Don Young","Tom O'Halleran","Ann Kirkpatrick","Raúl Grijalva","Paul Gosar","Andy Biggs","David Schweikert","Ruben Gallego","Debbie Lesko","Greg Stanton","Rick Crawford","French Hill","Steve Womack","Bruce Westerman","Doug LaMalfa","Jared Huffman","John Garamendi","Tom McClintock","Mike Thompson","Doris Matsui","Ami Bera","Paul Cook","Jerry McNerney","Josh Harder","Mark DeSaulnier","Nancy Pelosi","Barbara Lee","Jackie Speier","Eric Swalwell","Jim Costa","Ro Khanna","Anna Eshoo","Zoe Lofgren","Jimmy Panetta","TJ Cox","Devin Nunes","Kevin McCarthy","Salud Carbajal","Julia Brownley","Judy Chu","Adam Schiff","Tony Cárdenas","Brad Sherman","Pete Aguilar","Grace Napolitano","Ted Lieu","Jimmy Gomez","Norma Torres","Raul Ruiz","Karen Bass","Linda Sánchez","Gil Cisneros","Lucille Roybal-Allard","Mark Takano","Ken Calvert","Maxine Waters","Nanette Barragán","Katie Porter","Lou Correa","Alan Lowenthal","Harley Rouda","Mike Levin","Duncan D. Hunter","Juan Vargas","Scott Peters","Susan Davis","Diana DeGette","Joe Neguse","Scott Tipton","Ken Buck","Doug Lamborn","Jason Crow","Ed Perlmutter","John B. Larson","Joe Courtney","Rosa DeLauro","Jim Himes","Jahana Hayes","Lisa Blunt Rochester","Matt Gaetz","Neal Dunn","Ted Yoho","John Rutherford","Al Lawson","Michael Waltz","Stephanie Murphy","Bill Posey","Darren Soto","Val Demings","Daniel Webster","Gus Bilirakis","Charlie Crist","Kathy Castor","Ross Spano","Vern Buchanan","Greg Steube","Brian Mast","Francis Rooney","Alcee Hastings","Lois Frankel","Ted Deutch","Debbie Wasserman Schultz","Frederica Wilson","Mario Díaz-Balart","Debbie Mucarsel-Powell","Donna Shalala","Buddy Carter","Sanford Bishop","Drew Ferguson","Hank Johnson","John Lewis","Lucy McBath","Rob Woodall","Austin Scott","Doug Collins","Jody Hice","Barry Loudermilk","Rick W. Allen","David Scott","Tom Graves","Ed Case","Tulsi Gabbard","Russ Fulcher","Mike Simpson","Bobby Rush","Robin Kelly","Dan Lipinski","Jesús Chuy" ,"Mike Quigley","Sean Casten","Danny K. Davis","Raja Krishnamoorthi","Jan Schakowsky","Brad Schneider","Bill Foster","Mike Bost","Rodney Davis","Lauren Underwood","John Shimkus","Adam Kinzinger","Cheri Bustos","Darin LaHood","Pete Visclosky","Jackie Walorski","Jim Banks","Jim Baird","Susan Brooks","Greg Pence","André Carson","Larry Bucshon","Trey Hollingsworth","Abby Finkenauer","Dave Loebsack","Cindy Axne","Steve King","Roger Marshall","Steve Watkins","Sharice Davids","Ron Estes","James Comer","Brett Guthrie","John Yarmuth","Thomas Massie","Hal Rogers","Andy Barr","Steve Scalise","Cedric Richmond","Clay Higgins","Mike Johnson","Ralph Abraham","Garret Graves","Chellie Pingree","Jared Golden","Andy Harris","Dutch Ruppersberger","John Sarbanes","Anthony G. Brown","Steny Hoyer","David Trone","Jamie Raskin","Richard Neal","Jim McGovern","Lori Trahan","Joe Kennedy III","Katherine Clark","Seth Moulton","Ayanna Pressley","Stephen F. Lynch","Bill Keating","Jack Bergman","Bill Huizenga","Justin Amash","John Moolenaar","Dan Kildee","Fred Upton","Tim Walberg","Elissa Slotkin","Andy Levin","Paul Mitchell","Haley Stevens","Debbie Dingell","Rashida Tlaib","Brenda Lawrence","Jim Hagedorn","Angie Craig","Dean Phillips","Betty McCollum","Ilhan Omar","Tom Emmer","Collin Peterson","Pete Stauber","Trent Kelly","Bennie Thompson","Michael Guest","Steven Palazzo","Lacy Clay","Ann Wagner","Blaine Luetkemeyer","Vicky Hartzler","Emanuel Cleaver","Sam Graves","Billy Long","Jason Smith","Greg Gianforte","Jeff Fortenberry","Don Bacon","Adrian Smith","Dina Titus","Mark Amodei","Susie Lee","Steven Horsford","Chris Pappas","Ann McLane Kuster","Donald Norcross","Jeff Van Drew","Andy Kim","Chris Smith","Josh Gottheimer","Frank Pallone","Tom Malinowski","Albio Sires","Bill Pascrell","Donald Payne Jr.","Mikie Sherrill","Bonnie Watson Coleman","Deb Haaland","Xochitl Torres Small","Ben Ray Luján","Lee Zeldin","Peter T. King","Thomas Suozzi","Kathleen Rice","Gregory Meeks","Grace Meng","Nydia Velázquez","Hakeem Jeffries","Yvette Clarke","Jerry Nadler","Max Rose","Carolyn Maloney","Adriano Espaillat","Alexandria Ocasio-Cortez","José E. Serrano","Eliot Engel","Nita Lowey","Sean Patrick Maloney","Antonio Delgado","Paul Tonko","Elise Stefanik","Anthony Brindisi","Tom Reed","John Katko","Joseph Morelle","Brian Higgins","G. K. Butterfield","George Holding","Greg Murphy","David Price","Virginia Foxx","Mark Walker","David Rouzer","Richard Hudson","Dan Bishop","Patrick McHenry","Mark Meadows","Alma Adams","Ted Budd","Kelly Armstrong","Steve Chabot","Brad Wenstrup","Joyce Beatty","Jim Jordan","Bob Latta","Bill Johnson","Bob Gibbs","Warren Davidson","Marcy Kaptur","Mike Turner","Marcia Fudge","Troy Balderson","Tim Ryan","David Joyce","Steve Stivers","Anthony Gonzalez","Kevin Hern","Markwayne Mullin","Frank Lucas","Tom Cole","Kendra Horn","Suzanne Bonamici","Greg Walden","Earl Blumenauer","Peter DeFazio","Kurt Schrader","Brian Fitzpatrick","Brendan Boyle","Dwight Evans","Madeleine Dean","Mary Gay Scanlon","Chrissy Houlahan","Susan Wild","Matt Cartwright","Dan Meuser","Scott Perry","Lloyd Smucker","Fred Keller","John Joyce","Guy Reschenthaler","Glenn Thompson","Mike Kelly","Conor Lamb","Mike Doyle","David Cicilline","James Langevin","Joe Cunningham","Joe Wilson","Jeff Duncan","William Timmons","Ralph Norman","Jim Clyburn","Tom Rice","Dusty Johnson","Phil Roe","Tim Burchett","Chuck Fleischmann","Scott DesJarlais","Jim Cooper","John Rose","Mark E. Green","David Kustoff","Steve Cohen","Louie Gohmert","Dan Crenshaw","Van Taylor","John Ratcliffe","Lance Gooden","Ron Wright","Lizzie Pannill Fletcher","Kevin Brady","Al Green","Michael McCaul","Mike Conaway","Kay Granger","Mac Thornberry","Randy Weber","Vicente González","Veronica Escobar","Bill Flores","Sheila Jackson Lee","Jodey Arrington","Joaquin Castro","Chip Roy","Pete Olson","Will Hurd","Kenny Marchant","Roger Williams","Michael C. Burgess","Michael Cloud","Henry Cuellar","Sylvia Garcia","Eddie Bernice Johnson","John Carter","Colin Allred","Marc Veasey","Filemon Vela Jr.","Lloyd Doggett","Brian Babin","Rob Bishop","Chris Stewart","John Curtis","Ben McAdams","Peter Welch","Rob Wittman","Elaine Luria","Bobby Scott","Donald McEachin","Denver Riggleman","Ben Cline","Abigail Spanberger","Don Beyer","Morgan Griffith","Jennifer Wexton","Gerry Connolly","Suzan DelBene","Rick Larsen","Jaime Herrera Beutler","Dan Newhouse","Cathy McMorris Rodgers","Derek Kilmer","Pramila Jayapal","Kim Schrier","Adam Smith","Denny Heck","David McKinley","Alex Mooney","Carol Miller","Bryan Steil","Mark Pocan","Ron Kind","Gwen Moore","Jim Sensenbrenner","Glenn Grothman","Mike Gallagher","Liz Cheney"]
 
// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : speakers.filter(lang =>
    lang.toLowerCase().slice(0, inputLength) === inputValue
  );
};
 
// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion;
 
// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
    <span>{suggestion}</span>
);

class SmartInput extends React.Component {
  constructor(props) {
    super(props);
 
    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }
 
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };
 
  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };
 
  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
 
  render() {
    const { value, suggestions } = this.state;
 
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'any',
      value,
      onChange: this.onChange,
      name: this.props.name,
      className: 'option longOption searchInput'
    };
 
    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        wrapperStyle={{}}
      />
    );
  }
}


export default SmartInput;