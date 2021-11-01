import { useState, useEffect } from 'react';

import Modal from './components/Modal';
import data from './data';

const App = () => {
	const [modal, setModal] = useState(false);
	const [page, setPage] = useState(1);
	const [modalContent, setModalContent] = useState({});

	useEffect(() => {
		const result = data.find((data) => data.page === page);
		setModalContent(result);
	}, [page]);

	return (
		<>
			<button className='modal-btn' onClick={() => setModal(true)}>
				Mern Stack Roadmap
			</button>
			{modal && (
				<Modal
					setModal={setModal}
					page={page}
					setPage={setPage}
					modalContent={modalContent}
				/>
			)}
		</>
	);
};

export default App;
