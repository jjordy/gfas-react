import React from 'react'
import { Header, Form, Container, Input, Button, Checkbox, Grid } from '@jjordy/layout'
import { iamDisabled, IAMPolicy, IAMVisible } from '@jjordy/iam'

const MyTestComponent = ({ policy, userData }) => (
  <Grid width='100%' p={2}>
    <Header dividing color='blue'>
      Kitchen Sink Example
    </Header>
    <IAMVisible
      effects={policy.visible}
      field='userMessage'
      render={() => (
        <div>
          <Header dividing>Header</Header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corporis fugiat culpa quidem quaerat quo
            facere nesciunt voluptatem rerum, ducimus cupiditate nihil unde error quia aliquam sequi fugit. Consequatur,
            pariatur?
          </p>
        </div>
      )}
    />
    <br />
    <IAMVisible
      field='form'
      effects={policy.visible}
      render={() => (
        <IAMPolicy
          policy={policy.originalPolicy}
          name='KitchenSinkForm'
          userData={userData}
          render={({ policy }) => (
            <div>
              <IAMVisible
                field='parentContainer'
                effects={policy.visible}
                render={() => (
                  <div>
                    <Header dividing>Parent Text</Header>
                    <p>
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente architecto perferendis autem
                      odio! Nostrum aperiam temporibus vero aliquid tempora. Hic, perferendis cupiditate quisquam quia
                      doloribus laudantium obcaecati minima doloremque? Tenetur?
                    </p>
                    <p>
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente architecto perferendis autem
                      odio! Nostrum aperiam temporibus vero aliquid tempora. Hic, perferendis cupiditate quisquam quia
                      doloribus laudantium obcaecati minima doloremque? Tenetur?
                    </p>
                    <p>
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente architecto perferendis autem
                      odio! Nostrum aperiam temporibus vero aliquid tempora. Hic, perferendis cupiditate quisquam quia
                      doloribus laudantium obcaecati minima doloremque? Tenetur?
                    </p>
                    <p>
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente architecto perferendis autem
                      odio! Nostrum aperiam temporibus vero aliquid tempora. Hic, perferendis cupiditate quisquam quia
                      doloribus laudantium obcaecati minima doloremque? Tenetur?
                    </p>
                    <br />
                    <Form>
                      <Grid width='33%' gap={16}>
                        <Input
                          id='id_firstName'
                          type='text'
                          disabled={iamDisabled('firstName', policy.enabled)}
                          label='First Name'
                          placeholder='First name'
                        />
                        <Input
                          type='password'
                          disabled={iamDisabled('lastName', policy.enabled)}
                          label='Last Name'
                          placeholder='Last Name'
                        />
                      </Grid>
                      <Input
                        type='text'
                        disabled={iamDisabled('physicalAddress1', policy.enabled)}
                        label='Physical Address 1'
                        placeholder='Address...'
                      />
                      <Grid width='33%' gap={16}>
                        <Input
                          type='text'
                          disabled={iamDisabled('city', policy.enabled)}
                          label='City'
                          placeholder='City...'
                        />
                        <Input
                          type='text'
                          disabled={iamDisabled('state', policy.enabled)}
                          label='State'
                          placeholder='State...'
                        />
                        <Input
                          type='text'
                          disabled={iamDisabled('zip', policy.enabled)}
                          label='Zipcode'
                          placeholder='zipcode...'
                        />
                      </Grid>
                      <Checkbox disabled={iamDisabled('rememberMe', policy.enabled)} label='Remember Me' />
                      <Button content='Submit' disabled={iamDisabled('submit', policy.enabled)} />
                    </Form>
                  </div>
                )}
              />
            </div>
          )}
        />
      )}
    />
  </Grid>
)

export default MyTestComponent
