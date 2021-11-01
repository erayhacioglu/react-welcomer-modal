import React, { useEffect } from 'react';

const Modal = ({ setModal, page, setPage, modalContent }) => {
	useEffect(() => {
		setPage(1);
	}, [setPage]);

	console.log(page);

	return (
		<div className='modal-wrapper'>
			<div className='modal-overlay-btn' onClick={() => setModal(false)}></div>
			<div className='modal'>
				<div className='modal-header'>
					<h2 className='modal-header-title'>Mern Stack Roadmap</h2>
					<button
						onClick={() => setModal(false)}
						className='modal-header-times'
					>
						x
					</button>
				</div>
				<div className='modal-content'>
					<img
						src={modalContent.img ? modalContent.img : ''}
						alt={modalContent.title}
						className='modal-content-img'
						loading='lazy'
					/>
					<h2 className='modal-content-title'>{modalContent.title}</h2>
					<p className='modal-content-text'>{modalContent.description}</p>
				</div>
				<div className='modal-footer'>
					{page > 1 && (
						<button
							className='modal-footer-btn'
							onClick={() => setPage(page - 1)}
						>
							Back
						</button>
					)}

					{page <= 10 && (
						<button
							className='modal-footer-btn right'
							onClick={() => setPage(page + 1)}
						>
							Next
						</button>
					)}
					{page === 11 && (
						<button
							className='modal-footer-btn '
							onClick={() => setModal(false)}
						>
							Completed
						</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Modal;
