import { DeepPartial } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
// import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
// import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: StoryFn) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);

// export const StoreDecorator = (StoryComponent: StoryFn) => {
//     const store = createReduxStore();
//     return (
//         <Provider store={store}>
//             <StoryComponent />
//         </Provider>
//     );
// };
