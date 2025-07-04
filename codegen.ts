import dotenv from 'dotenv';
dotenv.config();

module.exports = {
	overwrite: true,
	schema: process.env.NEXT_PUBLIC_GRAPHQL_URL,
	generates: {
		'.codegen/schema.ts': {
			plugins: ['typescript'],
		},
	},
	ignoreNoDocuments: true,
};
