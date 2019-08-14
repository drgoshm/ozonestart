'use strict';

(() => {
	// checbox  <= this can be done using CSS only =)...
	document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
		checkbox.addEventListener('change', () => {
			if(checkbox.checked) 
				checkbox.nextElementSibling.classList.add('checked');
			else
				checkbox.nextElementSibling.classList.remove('checked');
		})
	});

	// cart
	const cartModal = document.querySelector('.cart');
	document.getElementById('cart').addEventListener('click', () => {
		cartModal.style.display = 'flex';
		document.body.style.overflow = 'hidden';
	});

	document.querySelector('.cart-close').addEventListener('click', () => {
		cartModal.style.display = '';
		document.body.style.overflow = '';
	});

	// adding and removing goods
	const cards = document.querySelectorAll('.goods .card'),
		cartEmpty = document.getElementById('cart-empty'),
		cartTotal = document.querySelector('.cart-total span'),
		cartWrapper = document.querySelector('.cart-wrapper'),
		counter  = document.querySelector('#cart .counter');

	const getCartTotal = () => {
		let total = 0;
		Array.prototype.forEach.call(
			cartWrapper.children, 
			element => {
				const cardPrice = element.querySelector('.card-price');
				if(cardPrice)
					total += parseInt(cardPrice.textContent, 10);
			}
		);

		return total;
	};


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
		cartTotal.textContent = getCartTotal();
	};

	const removeGoods = (card) => {
		card.remove();
		counter.textContent = cartWrapper.childElementCount;
		if(cartWrapper.childElementCount === 0)
			cartWrapper.appendChild(cartEmpty);
		cartTotal.textContent = getCartTotal();
	};

	cards.forEach((card) => {
		card.querySelector('button').addEventListener('click', () => {
			appendGoods(card);
		});
	});

})();