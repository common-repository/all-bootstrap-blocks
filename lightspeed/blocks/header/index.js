/**
 * Internal dependencies
 */
import metadata from './block.json';
import edit from './edit';
const icon = <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="edit-site-template-card__icon" aria-hidden="true" focusable="false"><path d="M18.5 10.5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"></path></svg>;

const { name } = metadata;
export { metadata, name };

export const settings = {
	icon,
	edit,
};
