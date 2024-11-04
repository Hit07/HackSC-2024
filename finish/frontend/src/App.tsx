import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

function App() {
  const [candidate1, setCandidate1] = useState('');
  const [candidate2, setCandidate2] = useState('');
  const[votingStarted, setVotingStarted] = useState(false);
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [winner, setWinner] = useState('');

  const start_voting = () => {
    console.log('Voting has started');
    setVotingStarted(true);
    setVotes({
      [candidate1]: 0,
      [candidate2]: 0,
    });
  }

  const voteForCandidate = (candidate: string) => {
    console.log(`Voted for ${candidate}`);
    setVotes((prevVotes) => {
      return {...prevVotes, [candidate]: prevVotes[candidate] + 1}
    })
  }

  const declareWinner = () => {
    if (votes[candidate1] > votes[candidate2]) {
      return 'The winner is ' + candidate1;
    } else if (votes[candidate1] < votes[candidate2]) {
      return 'The winner is ' + candidate2;
    } else {
      return 'It is a tie';
    }
  }

  return (
    <>
        <div className="container">         
        <h1 className='text-center custom-header'> Voting App! </h1>
        {!votingStarted && (
          <>
        <p className='text-center'> Welcome to the voting app! <br /> To get started, please enter the names of Candidate 1 and Candidate 2 in your application below. Then, hit start to begin the vote! </p>
        <form className='d-flex justify-content-center gap-3 mb-4'>
        <input type='text' value={candidate1} placeholder="Candidate1" onChange={(e) => setCandidate1(e.target.value) } className="form-control rounded"  />
        <input type='text' value={candidate2} placeholder="Candidate2" onChange={(e) => setCandidate2(e.target.value)} className="form-control rounded"  />
        </form> 
          <button onClick={() => {start_voting()}}> Start Voting! </button>
          </>
        )}
        {votingStarted && (
          <>
        <div className='d-flex flex-column justify-content-center gap-3 space-y-4'>
        <h2 className='text-center mt-4'> Voting for {candidate1} and {candidate2} </h2>
        
        <div className='d-flex justify-content-center gap-3'>
        <button onClick={() => {voteForCandidate(candidate1)}}> Vote for {candidate1} </button>
        <button onClick={() => {voteForCandidate(candidate2)}}> Vote for {candidate2} </button>
        </div>
        <button onClick={() => { setWinner(declareWinner())}}> End Voting </button>
        {winner !== '' && (
          <h3 className='text-center'> {winner}! </h3>
        )}
        </div>
        </> )} 

        
      </div>
        
    </>
  )
}

export default App
