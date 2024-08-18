import {
	ChangeEvent,
	ChangeEventHandler,
	MutableRefObject,
	useEffect,
	useRef,
	useState
} from 'react';

const App = () => {
	type CallbackFunction = (sentence: string) => string | void;

	const [text, setText] = useState('');
	const [typedSentence, setTypedSentence] = useState('');

	const savedCallback: MutableRefObject<CallbackFunction | undefined> =
		useRef();
	const intervalId: MutableRefObject<number | undefined> = useRef();

	// start the interval and save its id,
	// so we can stop it once all letters are typed
	const startTyping = (sentence: string) => {
		setTypedSentence('');
		intervalId.current = setInterval(() => {
			if (savedCallback.current) {
				savedCallback.current(sentence);
			}
		}, 500);
	};

	// stop the interval
	const stopTyping = () => {
		clearInterval(intervalId.current);
		intervalId.current = undefined;
	};

	const typeNextLetter = (sentence: string) => {
		if (typedSentence.length === sentence.length) {
			stopTyping();
			return;
		}
		const nextLetterIndex = typedSentence.length;
		setTypedSentence(typedSentence + sentence[nextLetterIndex]);
	};

	useEffect(() => {
		savedCallback.current = typeNextLetter;
	}, [typedSentence]);

	const handleChange: ChangeEventHandler<HTMLInputElement> = (
		e: ChangeEvent<HTMLInputElement | undefined>
	) => {
		e.preventDefault();
		setText(e.target.value || '');
	};

	return (
		<div>
			<input
				onChange={handleChange}
				type="text"
				name="sentence"
				placeholder="Type a sentence"
				style={{ width: '300px', height: '40px' }}
			/>
			<button
				onClick={() => {
					startTyping(text);
				}}
				type="submit"
			>
				Display with typewriter effect
			</button>

			{typedSentence && <p>You typed {typedSentence}</p>}
		</div>
	);
};

export default App;
