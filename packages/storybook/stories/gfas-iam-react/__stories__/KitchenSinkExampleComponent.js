import React from 'react'
import { Header, Form, Container } from 'semantic-ui-react'
import { iamDisabled, IAMPolicy, IAMVisible } from 'gfas-iam-react'

const MyTestComponent = ({ policy, userData }) => (
  <div>
    <Header dividing color='blue'>
      Kitchen Sink Example
    </Header>
    <IAMVisible
      effects={policy.visible}
      field='userMessage'
      render={() => (
        <Container>
          <Header dividing>Header</Header>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corporis fugiat culpa quidem quaerat quo
            facere nesciunt voluptatem rerum, ducimus cupiditate nihil unde error quia aliquam sequi fugit. Consequatur,
            pariatur?
          </p>
        </Container>
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
                  <Container>
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
                      <Form.Group widths='equal'>
                        <Form.Input
                          id='id_firstName'
                          type='text'
                          disabled={iamDisabled('firstName', policy.enabled)}
                          label='First Name'
                          placeholder='First name'
                        />
                        <Form.Input
                          type='password'
                          disabled={iamDisabled('lastName', policy.enabled)}
                          label='Last Name'
                          placeholder='Last Name'
                        />
                      </Form.Group>
                      <Form.Input
                        type='text'
                        disabled={iamDisabled('physicalAddress1', policy.enabled)}
                        label='Physical Address 1'
                        placeholder='Address...'
                      />
                      <Form.Group widths='equal'>
                        <Form.Input
                          type='text'
                          disabled={iamDisabled('city', policy.enabled)}
                          label='City'
                          placeholder='City...'
                        />
                        <Form.Input
                          type='text'
                          disabled={iamDisabled('state', policy.enabled)}
                          label='State'
                          placeholder='State...'
                        />
                        <Form.Input
                          type='text'
                          disabled={iamDisabled('zip', policy.enabled)}
                          label='Zipcode'
                          placeholder='zipcode...'
                        />
                      </Form.Group>
                      <Form.Checkbox disabled={iamDisabled('rememberMe', policy.enabled)} label='Remember Me' />
                      <Form.Button content='Submit' disabled={iamDisabled('submit', policy.enabled)} />
                    </Form>
                  </Container>
                )}
              />
            </div>
          )}
        />
      )}
    />
  </div>
)

export default MyTestComponent
