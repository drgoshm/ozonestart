'use strict';

(() => {
	// checbox
	document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
		checkbox.addEventListener('change', () => {
			if(checkbox.checked) 
				checkbox.nextElementSibling.classList.add('checked');
			else
				checkbox.nextElementSibling.classList.remove('checked')
		})
	});

	// cart
	const cartModal = document.querySelector('.cart');
	document.getElementById('cart').addEventListener('click', () => {
		cartModal.style.display = 'flex';
	});

	document.querySelector('.cart-close').addEventListener('click', () => {
		cartModal.style.display = '';
	});


	// adding and removing goods

	const cards = document.querySelectorAll('.goods .card');
	const cartWrapper = document.querySelector('.cart-wrapper');
	const cartEmpty = document.getElementById('cart-empty');
	const counter  = document.querySelector('#cart .counter');

	const appendGoods = (card) => {
		const cardClone = card.cloneNode(true);
		const btn = cardClone.querySelector('button');
		btn.textContent = 'Удалить';
		btn.addEventListener('click', () => {
			removeGoods(cardClone);
		});
		cartWrapper.appendChild(cardClone);
		cartEmpty.remove();
		counter.textContent = cartWrapper.childElementCount;
	};

	const removeGoods = (card) => {
		card.remove();
		counter.textContent = cartWrapper.childElementCount;
		if(cartWrapper.childElementCount === 0)
			cartWrapper.appendChild(cartEmpty);
	};

	cards.forEach((card) => {
		card.querySelector('button').addEventListener('click', () => {
			appendGoods(card);
		});
	});


	document.querySelector('.goods').addEventListener('click', (event) => {
		console.dir(event.target);
	});

})();